// En tu componente React
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DownloadCloudinary = () => {
  const [secureDownloadUrl, setSecureDownloadUrl] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false); // Estado para controlar el mensaje de descarga exitosa

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener la URL segura
    axios.get('http://localhost:3001/obtener-url-segura')
      .then((response) => {
        setSecureDownloadUrl(response.data);//
      })
      .catch((error) => {
        console.error('Error al obtener la URL segura:', error);
      });
  }, []);

  const handleDownloadClick = () => {
    // Cuando los usuarios hagan clic en el botón de descarga,
    // redirige a la URL segura para la descarga.
    window.location.href = secureDownloadUrl;

    // Cuando se inicie la descarga, establece el estado de descarga exitosa en verdadero.
    setDownloadSuccess(true);
  };

  return (
    <div>
      <button onClick={handleDownloadClick}>Descargar Notas de Consulta</button>
      {/* Muestra el mensaje de descarga exitosa si downloadSuccess es verdadero */}
      {downloadSuccess && <p>Descarga exitosa. ¡Gracias por descargar el archivo!</p>}
    </div>
  );
}

export default DownloadCloudinary;
