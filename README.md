Guía para Compilar y Ejecutar el Código

Requisitos Previos

- Node.js y npm instalados en tu sistema.
  - Puedes descargarlos desde https://nodejs.org.

Pasos para Ejecutar la Aplicación

1. Clonar el Repositorio o Descargar los Archivos

   Opción 1: Clonar el Repositorio

   Si el código fuente está en un repositorio de GitHub, puedes clonarlo usando:

   git clone https://github.com/tu-usuario/aves-guatemala.git

   Luego, navega al directorio del proyecto:

   cd aves-guatemala

   Opción 2: Descargar los Archivos

   Si tienes los archivos en un archivo comprimido (.zip o .rar):

   - Descomprime el archivo en una carpeta de tu elección.
   - Navega al directorio del proyecto:

     cd ruta/del/proyecto/aves-guatemala

2. Instalar las Dependencias

   En la terminal, dentro del directorio del proyecto, ejecuta:

   npm install

   Esto instalará todas las dependencias necesarias para ejecutar la aplicación.

3. Ejecutar la Aplicación en Modo de Desarrollo

   Una vez instaladas las dependencias, inicia la aplicación con:

   npm start

   Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado en la dirección http://localhost:3000.

4. Acceder a la Aplicación

   Si el navegador no se abre automáticamente, puedes abrirlo manualmente y navegar a:

   http://localhost:3000

   Deberías ver la pantalla de inicio de la aplicación.

5. Navegar por la Aplicación

   - Pantalla de Inicio: Ingresa tu nombre completo y número de carnet en los campos correspondientes y haz clic en "Cargar".

   - Listado de Aves: Se mostrará una lista de aves de Guatemala, donde podrás ver detalles como la familia, nombre común, ubicación y descubridor. También puedes reproducir el sonido del ave haciendo clic en "Reproducir sonido".

Notas Adicionales

- Detener la Aplicación: Para detener el servidor de desarrollo, presiona Ctrl + C en la terminal donde está ejecutándose npm start.

- Construir para Producción: Si deseas generar una versión optimizada para producción, ejecuta:

  npm run build

  Esto creará una carpeta build con los archivos listos para desplegar en un servidor web.

- Dependencias Necesarias: Asegúrate de que las siguientes dependencias estén instaladas (se instalan automáticamente con npm install):

  - React y React DOM
  - React Router DOM
  - Material-UI (@mui/material, @mui/icons-material, @emotion/react, @emotion/styled)
  - Fontsource Poppins (@fontsource/poppins)

- Problemas Comunes:

  - Error al instalar dependencias: Si encuentras errores al ejecutar npm install, verifica que tienes una versión compatible de Node.js.

  - Puerto en uso: Si el puerto 3000 está en uso, puedes cambiar el puerto ejecutando:

    En Windows:

    set PORT=3001 && npm start

    En macOS/Linux:

    export PORT=3001 && npm start

  - Actualizaciones de Dependencias: Si experimentas problemas con versiones de paquetes, puedes intentar actualizar las dependencias:

    npm update
