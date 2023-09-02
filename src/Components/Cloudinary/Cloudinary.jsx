import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import styles from "./Cloudinary.module.css";
import cloudinaryConfig from './CloudinaryCredentials';

const Cloudinary = () => {

    const [file, setFile] = useState("");//estado que se usa para almacenar la url del archivo subido a cloudinary
    console.log(`Mi archivo: ${file}`);
    const [loading, setloading] = useState(false);// se utiliza para controlar si se está cargando un archivo o no.
    console.log(`Mi carga: ${loading}`);

    const handleUploadFile = async (event) => {// se ejecuta cuando se selecciona un archivo en el campo de entrada.
        event.preventDefault();
        
        const files = event.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "filesZucca");
        setloading(true);
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
            {
                method: "POST",
                body: data, 
            }
        )
        const file = await response.json();
        setFile(file.secure_url);
        console.log(file.secure_url);
        setloading(false);
    }
   
    return ( 
        <div>
            <Container className={styles.container}>
                <h1>Subiendo Archivos</h1>
                <FormGroup>
                    <Input
                        type='file'
                        // name='file'
                        accept=".doc, .docx, .pdf"
                        placeholder='Ningún archivo seleccionado'
                        onChange={handleUploadFile}
                    ></Input>   
                    {loading ? (<h3>Cargando Archivos...</h3>) : <p>{loading.original_filename}</p>}          
                </FormGroup>
            </Container>
        </div>
     );
}
 
export default Cloudinary;
{/* //(<img src={file}/>)}   */}     

 // const [file, setFile] = useState(null);
    // const [uploadResult, setUploadResult] = useState(null);

    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     setFile(selectedFile);
    // };

    // const handleFileUpload = async () => {
    //     if(!file) return;

    //     try {
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         formData.append("upload_preset", "filesZucca"); // aqui va el nombre de la carpeta que se creo en la plataforma de Cloudinary

    //         const response = await fetch(
    //                     `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
    //                     {
    //                         method: "POST",
    //                         body: formData, 
    //                     }
    //                 );
    //         setUploadResult(response.data);
    //     } catch (error) {
    //         console.log("Error uploading file: ", error);
    //     }
    // };

    {/*     <h1>Subir archivos a Cloudinary</h1>
            <input type="file" accept='.doc, .docx, .pdf' onChange={handleFileChange}/>
            <button onClick={handleFileUpload}>Subir Archivo</button>
            {uploadResult && (
                <div>
                    <p>Archivo subido con éxito:</p>
                    <p>Nombre: {uploadResult.original_filename}</p>
                    <p>URL: {uploadResult.url}</p>
                </div>
            )} */}