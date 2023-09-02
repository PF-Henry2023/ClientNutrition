import { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import styles from "./Cloudinary.module.css";
import cloudinaryConfig from './CloudinaryCredentials';

const Cloudinary = () => {

    const [file, setFile] = useState("");//estado que se usa para almacenar la url del archivo subido a cloudinary
    const [loading, setloading] = useState(false);// se utiliza para controlar si se está cargando un archivo o no.
    const [uploadSuccess, setUploadSuccess] = useState(false);//estado para indicar la carga exitosa
    
    const handleUploadFile = async (event) => {// se ejecuta cuando se selecciona un archivo en el campo de entrada.
        event.preventDefault();
        const files = event.target.files;//se obtiene la lista de archivos seleccionados por el usuario
        const data = new FormData();//Se crea un objeto FormData para construir los datos que se enviarán a Cloudinary.
        data.append("file", files[0]);
        data.append("upload_preset", "filesZucca");//filesZucca es el nombre de la carpeta que se creo en cloudinary
        setloading(true);//Cuando se está cargando un archivo, loading se establece en true,

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
                {
                    method: "POST",
                    body: data, 
                }
            )
            const file = await response.json();
            setFile(file.secure_url);//Se actualiza el estado file con la URL segura del archivo cargado.
            setUploadSuccess(true); // Establecer el estado de carga exitosa en verdadero
        } catch (error) {
            console.error("Error uploading file: ", error);
        }finally{
            setloading(false);//cuando la carga está completa, se restablece a false.
        }
        
    }
   
    return ( 
        <div>
            <Container className={styles.container}>
                <h1>Subiendo Archivos</h1>
                <FormGroup>
                    <Input
                        type='file'
                        placeholder='Ningún archivo seleccionado'
                        onChange={handleUploadFile}
                    ></Input>   
                    {loading ? (
                        <h3>Cargando Archivos...</h3>
                        ) : ( uploadSuccess ? (
                            <p>Archivo cargado con éxito</p>
                            ) : (
                                <p>{file ? file : ""}</p>
                            )
                    )}          
                </FormGroup>
            </Container>
        </div>
     );
}
 
export default Cloudinary;
