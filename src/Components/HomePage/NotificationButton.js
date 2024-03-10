import React, { useState, useEffect, useRef } from 'react';

export default function NotificationButton() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const notificationsRef = useRef(null);

  // Función para mostrar u ocultar la bandeja de notificaciones
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Manejador de eventos de clic en el documento para cerrar la bandeja al hacer clic fuera de ella
  const handleClickOutside = (event) => {
    if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para marcar todas las notificaciones como leídas y reiniciar el contador
  const markAllAsRead = () => {
    setNotifications([]);
  };

  return (
    <div className="relative">
      <button className="w-8 h-8 text-white" onClick={toggleNotifications}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"/>
        </svg>
      </button>
      <div className="px-1 bg-blue-500 rounded-full text-center text-white text-sm absolute -top-3 -end-2">
        {notifications.length}
        <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-blue-200 w-full h-full"></div>
      </div>
      {showNotifications && (
        <div className="absolute right-0 mt-10 max-h-80 w-80 bg-white border border-gray-200 shadow-lg rounded-lg overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Notificaciones</h2>
            <button className="text-sm text-blue-500 hover:underline" onClick={markAllAsRead}>Marcar todas como leídas</button>
          </div>
          <div className="p-4">
            {notifications.map((notification, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-gray-200">
                {notification}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

