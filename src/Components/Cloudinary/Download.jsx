// En tu componente React
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DownloadCloudinary = () => {
  const [secureDownloadUrl, setSecureDownloadUrl] = useState('');
  console.log(secureDownloadUrl);
  useEffect(() => {
    // Realiza una solicitud al servidor para obtener la URL segura
    axios.get('http://localhost:3001/obtener-url-segura')
      .then((response) => {
        console.log(response.data);
        setSecureDownloadUrl(response.data);//.secureDownloadUrl
      })
      .catch((error) => {
        console.error('Error al obtener la URL segura:', error);
      });
  }, []);

  const handleDownloadClick = () => {
    // Cuando los usuarios hagan clic en el botón de descarga,
    // redirige a la URL segura para la descarga.
    window.location.href = secureDownloadUrl;
  };

  return (
    <div>
      <button onClick={handleDownloadClick}>Descargar Notas de Consulta</button>
    </div>
  );
}

export default DownloadCloudinary;
