# A tener en cuenta
- - El slideshow trabaja con un paquete llamada Swiper.
    - - npm install swiper
- - Adicional instalar boostrap para la parte de responsividad
     - - npm install bootstrap
     - - debo usar bootstrap de la siguiente manera
        - - import 'bootstrap/dist/css/bootstrap.min.css';

# Entregables
- - EP 2.1 :  Implementación de 7 mockups UI en el framework Ionic. Adi-
cional los dos formularios de inicio de sesión y registro.
- - EP 2.2: Hacer lectura de datos desde un archivo JSON (puede ser local, o alguna fuente externa de datos), y mostrarlos en alguna de las pantallas.
- - EP2.3 Definir ell modelo de la base de datos. Algunos motores de bases de datos que se pueden utilizar son: MySQL, PostgreSQL, SQLite, MongoDB, Firebase, entre otros. Se deben incluir al menos 3 tablas o documentos. __Justificar la selección del tipo de base de datos__.
- - EP2.4 Hacer uso de al menos dos (2) __patrones de diseño__, ya sea web o móvil, en la implementación de las pantallas, teniendo como foco principal el uso desde un dispositivo móvil. [Ver presentación de patrones de diseño](EP2/patronesdediseno.pdf)

# Caso de Estudio
Mi proyecto se centra en una tienda en línea llamada "ShopNow", el cual busca mejorar la gestión de inventarios, seguimiento de pedidos y relaciones con los clientes. 

Las interfaces (UI) que he implementado de acuerdo al diseño de las __UI Figma__ presentadas son: 

1. Seguimiento de pedidos
2. Información de los clientes
3. Interface de seguimiento de pedidos
4. Informes de Ventas
5. Interface de Lista de productos
6. Detalle del producto
7. Recordar contraseña

Adicional 
8. Inicio de sesión 
9. Registro

# Propuesta 
Mi propuesta es una aplicación web responsiva, por tal razón se ha considerado usar la librería bootstrap para hacer el diseño de manera responsiva. 

La base de datos que he seleccionado es relacional, el motor de la base de datos ha usar es MySQL 

[Modelo de la BD](EP2/DB.png)

# Justificación

## 1. Rendimiento y escalabilidad

MySQL es conocido por ser eficiente y rápido, especialmente en aplicaciones de lectura intensiva, lo que lo convierte en una excelente opción para proyectos web que requieren consultas rápidas. Además, es escalable, por lo que puede manejar tanto pequeñas aplicaciones como grandes sistemas con un tráfico elevado.

## 2. Fácil integración con tecnologías web populares

MySQL se integra fácilmente con muchos lenguajes y frameworks de desarrollo web como PHP, Python, Ruby y JavaScript. Es una opción muy utilizada en conjunto con PHP (a través de LAMP o WAMP), lo que hace que sea ideal para aplicaciones web que utilicen este stack.

## 3. Popularidad y comunidad de soporte

MySQL es uno de los sistemas de gestión de bases de datos más populares en el desarrollo web, lo que significa que tiene una comunidad muy activa, abundante documentación y soluciones rápidas para problemas comunes. Su popularidad también asegura que haya muchas herramientas compatibles para administración y monitoreo.

## 4. Código abierto y coste

Al ser un motor open-source en su versión Community, permite a los desarrolladores utilizarlo sin costos de licencias, lo que lo hace atractivo para proyectos con limitaciones de presupuesto. Además, las versiones pagadas de MySQL (Enterprise) ofrecen características avanzadas, si es necesario en proyectos empresariales.

##  5. Soporte para grandes volúmenes de datos

MySQL ofrece un buen rendimiento para bases de datos grandes y puede manejar millones de registros de manera eficiente. Esto es especialmente importante en proyectos de ingeniería web donde los volúmenes de datos pueden crecer con el tiempo.

## 6. Facilidad de uso y administración

Su simplicidad en la configuración y mantenimiento lo hace una opción atractiva para proyectos de ingeniería web donde los tiempos de desarrollo y la facilidad de administración son cruciales.

En resumen, MySQL es elegido en muchos proyectos de ingeniería web por su velocidad, flexibilidad, soporte comunitario y compatibilidad con una amplia variedad de tecnologías.

# Información tomada de: 
- - https://dev.mysql.com/doc/
- - High Performance MySQL de Baron Schwartz, Peter Zaitsev, Vadim Tkachenko
- - Medium: Artículos sobre comparaciones entre MySQL y otros motores de bases de datos.
