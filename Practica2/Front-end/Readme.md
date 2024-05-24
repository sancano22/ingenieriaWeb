1-  Generar para Android
  -- npm install @capacitor/android
Compilar para Android
  -- ionic build --android
2- Adicionar la plataforma Android
npx cap add android

3- Abrir
  npx cap open android

Tener en cuenta : Habilitar como desarrollador para que logre compilar.

- Para habilitar cámara se requiere contruir el proyecto
npm install @capacitor/camera
npx cap sync

Si usted requiere guardar la captura debe habilitar permiso en Manifest

<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />