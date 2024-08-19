## ¿Que es Git?

Git es un sistema de control de versiones distribuido que permite a múltiples personas trabajar en un proyecto al mismo tiempo sin sobrescribir el trabajo de los demás. Es muy popular en el desarrollo de software para gestionar y rastrear cambios en el código fuente a lo largo del tiempo.

# Características principales de Git:

1.	Control de versiones distribuido: A diferencia de los sistemas de control de versiones centralizados, Git permite que cada colaborador tenga una copia completa del historial del proyecto en su propia máquina. Esto significa que pueden trabajar y hacer cambios sin necesidad de estar conectados a un servidor central todo el tiempo.

2.	Seguimiento de cambios: Git guarda un historial completo de los cambios realizados en el proyecto, lo que permite volver a versiones anteriores del código si es necesario. Esto es útil para revertir errores o para revisar el trabajo previo.

3.	Branching y merging: Git facilita la creación de ramas (branches), que son versiones paralelas del proyecto. Esto permite a los desarrolladores trabajar en nuevas funcionalidades o correcciones de errores sin afectar la rama principal del código. Una vez que los cambios son revisados y están listos, se pueden fusionar (merge) con la rama principal.

4.	Colaboración: Git permite a múltiples desarrolladores trabajar simultáneamente en un proyecto sin conflictos, ya que cada uno puede trabajar en su propia copia del código. Cuando los cambios están listos, se integran en el proyecto principal.

5.	Desempeño: Git está diseñado para ser rápido y eficiente, incluso con proyectos grandes. La mayoría de las operaciones se realizan localmente, lo que hace que sea muy rápido para el usuario.

6.	Integración con plataformas de desarrollo: Git es compatible con plataformas como GitHub, GitLab y Bitbucket, que facilitan la colaboración remota, la gestión de repositorios y la automatización de flujos de trabajo en proyectos de software.


# Principales comandos:

1. **git init:**

Este comando inicializa un nuevo repositorio de Git en el directorio actual. Crea un subdirectorio oculto llamado .git que contiene toda la información necesaria para el control de versiones.

`git init`

2. **git clone:**

Copia un repositorio Git existente (remoto o local) a tu máquina local. Se utiliza para obtener una copia completa del proyecto con su historial.

`git clone https://github.com/usuario/repositorio.git`

3. **git add:**

Añade cambios realizados en archivos al área de preparación (staging area). Esto significa que indicas cuáles son los archivos que deseas incluir en el próximo commit.

`git add archivo.txt`
`git add . ` # Añade todos los archivos modificados en el directorio actual

4. **git commit:**

Registra los cambios preparados en el repositorio. Cada commit es como una “instantánea” del proyecto en ese momento. Se requiere un mensaje para describir los cambios realizados.

`git commit -m "Descripción de los cambios"`

5. **git status:**

Muestra el estado del directorio de trabajo y el área de preparación. Te indica qué archivos han sido modificados, añadidos o eliminados, y cuáles están listos para ser commitados.

`git status`

6. **git log:**

Muestra el historial de commits en el repositorio, con detalles como el autor, la fecha y el mensaje de cada commit. Es útil para revisar los cambios hechos a lo largo del tiempo.

`git log`

7. **git branch:**

Permite crear, listar y eliminar ramas (branches) en el repositorio. Las ramas son versiones independientes del proyecto donde puedes trabajar sin afectar la rama principal (main o master).

	•	Crear una nueva rama:

`git branch nombre-de-la-rama`

	•	Listar todas las ramas:

`git branch`

	•	Eliminar una rama:

`git branch -d nombre-de-la-rama`

8. **git checkout:**

Este comando se usa para cambiar de una rama a otra o para recuperar archivos en un estado específico.

	•	Cambiar a otra rama:

`git checkout nombre-de-la-rama`

	•	Crear una nueva rama y cambiar a ella:

`git checkout -b nueva-rama`

9. **git merge:**

Fusiona una rama con otra. Por ejemplo, cuando finalizas una característica en una rama independiente, puedes fusionarla con la rama principal (como main).

`git checkout main  # Cambia a la rama principal`
`git merge nombre-de-la-rama  # Fusiona la rama en la principal`

10. **git pull:**

Este comando recupera (fetch) los últimos cambios del repositorio remoto y los fusiona (merge) en la rama actual en tu repositorio local.

`git pull origen main  # Obtiene y fusiona los últimos cambios de la rama "main"`

11. **git push:**

Envía tus commits locales al repositorio remoto, actualizando la rama correspondiente en el servidor.

`git push origen main  # Envía los commits a la rama "main" del repositorio remoto`

12. **git remote:**

Gestiona las conexiones a repositorios remotos. Puedes añadir, ver o eliminar las URL de los repositorios remotos a los que se conecta tu repositorio local.

	•	Añadir un repositorio remoto:

`git remote add origen https://github.com/usuario/repositorio.git`

	•	Ver los repositorios remotos:

`git remote -v`

	•	Eliminar un repositorio remoto:

`git remote remove origen` 

13. **git fetch:**

Este comando obtiene los cambios del repositorio remoto, pero no los fusiona con tu rama actual. Es útil para ver qué cambios están disponibles antes de integrarlos.

`git fetch origen`

14. **git reset:**

Este comando deshace cambios en el área de preparación o deshace commits ya realizados, dependiendo de las opciones usadas.

	•	Resetear el área de preparación sin tocar el código:

`git reset archivo.txt`

	•	Eliminar commits y cambios permanentemente:

`git reset --hard commit_hash`

15. **git stash:**

Guarda temporalmente los cambios en el directorio de trabajo, sin hacer un commit, y te permite limpiar el área de trabajo para realizar otras tareas. Luego puedes restaurar esos cambios cuando los necesites.

	•	Guardar cambios:

`git stash`

	•	Recuperar los cambios guardados:

`git stash pop`