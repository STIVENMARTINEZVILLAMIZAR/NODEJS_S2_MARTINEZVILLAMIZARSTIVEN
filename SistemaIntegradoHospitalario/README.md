<div align="center">

# SISTEMA INTEGRADO HOSPITALARIO (SIH)

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Mermaid](https://img.shields.io/badge/Mermaid-009688?style=for-the-badge&logo=mermaid&logoColor=white)
![Diagrams.net](https://img.shields.io/badge/Diagrams.net-FF6F00?style=for-the-badge&logo=diagramsdotnet&logoColor=white)

**STIVEN MARTÍNEZ VILLAMIZAR**  
**S2**

---
![CampusLands • Cajasan 2025](https://img.shields.io/badge/CampusLands_%E2%80%A2_Cajasan_2025-FF4500?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvc3ZnPg==&labelColor=CC3700)
<br/>
![ruta](https://img.shields.io/badge/RUTA-Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
</div>

---

## Índice

- [Introducción](#introducción)
- [Caso de Estudio](#caso-de-estudio)
- [Planificación](#planificación)
- [Modelo Conceptual](#modelo-conceptual)
- [Modelo Lógico](#modelo-lógico)
- [Normalización del Modelo Lógico](#normalización-del-modelo-lógico)
- [Modelo Físico](#modelo-físico)
- [Diagrama E-R](#diagrama-e-r)
- [Tablas](#tablas)
- [Relaciones entre Tablas](#relaciones-entre-tablas)
- [Inserción de Datos](#inserción-de-datos)

---

## Introducción

El **Sistema Integrado Hospitalario (SIH)** busca centralizar la gestión de datos médicos y administrativos de hospitales, pacientes, doctores, técnicos y personal operativo.  
Actualmente, la información se maneja de forma dispersa, generando duplicidades, errores y pérdida de trazabilidad en los procesos clínicos y administrativos.

**Solución:**  
Migrar a una base de datos unificada, construida con **Node.js + MongoDB**, que permita:
- Integrar la información de pacientes, doctores y hospitales.
- Controlar la capacidad de pabellones.
- Administrar equipos médicos y departamentos.
- Evitar redundancia de datos y mantener integridad referencial.

---

## Caso de Estudio

> “Una persona puede estar asociada con diferentes hospitales, y un Hospital puede emplear o atender a múltiples Personas...”

| Entidad | Descripción |
|--------|-------------|
| **Persona** | Cualquier individuo (paciente, doctor, enfermera, técnico, administrativo). |
| **Hospital** | Institución médica que agrupa departamentos, pabellones y equipos. |
| **Departamento** | Área interna del hospital a la que pertenece el personal. |
| **Personal** | Empleados del hospital (administrativos, técnicos, operativos). |
| **Paciente** | Persona atendida en el hospital, asignada a un pabellón según diagnóstico. |
| **Pabellón** | Espacio físico donde se alojan pacientes. |
| **Equipo Médico** | Grupo de doctores organizados por jerarquía (líder, asociados, junior). |

---

## Planificación

| Etapa | Acción |
|------|--------|
| 1. Recolección | Entrevistas con el personal hospitalario y revisión de procesos. |
| 2. Diseño Conceptual | Identificación de entidades, atributos y relaciones. |
| 3. Diseño Lógico | Definición de claves primarias, foráneas y relaciones cardinales. |
| 4. Normalización | Aplicación de 1FN → 2FN → 3FN para evitar redundancia. |
| 5. Modelo Físico | Implementación del esquema en MongoDB. |
| 6. Población | Inserción de datos de prueba (hospitales, doctores, pacientes). |
| 7. Documentación | Descripción del modelo, relaciones y validaciones. |

---

## Modelo Conceptual

![Modelo Conceptual](imgs/sistemaHospitalario.drawio.png)

### Entidades Clave

| Entidad | Atributos |
|--------|----------|
| **Persona** | `idPersona`, `titulo`, `nombre`, `segundoNombre`, `apellido`, `direccion`, `tipoPersona` |
| **Hospital** | `idHospital`, `nombre`, `direccion`, `ciudad` |
| **Departamento** | `idDepartamento`, `nombre`, `idHospital` |
| **Personal** | `idPersonal`, `idPersona`, `idDepartamento`, `fechaVinculacion`, `salario`, `rol` |
| **Paciente** | `idPaciente`, `idPersona`, `fechaNacimiento`, `fechaIngreso`, `diagnostico`, `idPabellon` |
| **Pabellón** | `idPabellon`, `nombre`, `capacidad`, `idHospital` |
| **Equipo Médico** | `idEquipo`, `nombre`, `idHospital`, `idLider` |
| **DoctorEquipo** | `idRelacion`, `idDoctor`, `idEquipo`, `rol` |
| **Atención** | `idAtencion`, `idPaciente`, `idDoctor`, `fecha`, `descripcion` |

### Relaciones

- **1:N** → Hospital → Departamentos  
- **1:N** → Hospital → Pabellones  
- **1:N** → Hospital → Equipos Médicos  
- **1:N** → Departamento → Personal  
- **1:N** → Pabellón → Pacientes  
- **N:M** → Doctor ↔ Paciente (Atención)  
- **N:M** → Doctor ↔ Equipo Médico (DoctorEquipo)

---

## Modelo Lógico

![Modelo Lógico](imgs/modeloLogicoHospitalario.png)

> Tablas con claves primarias (PK), foráneas (FK) y atributos en 3FN.

---

## Normalización del Modelo Lógico

### PERSONA

**Atributos:** `idPersona`, `titulo`, `nombre`, `segundoNombre`, `apellido`, `direccion`, `tipoPersona`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Atributos atómicos |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### HOSPITAL

**Atributos:** `idHospital`, `nombre`, `direccion`, `ciudad`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Campos simples |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### DEPARTAMENTO

**Atributos:** `idDepartamento`, `nombre`, `idHospital`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Datos atómicos |
| 2FN | Yes | PK: `idDepartamento` |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### PERSONAL

**Atributos:** `idPersonal`, `idPersona`, `idDepartamento`, `fechaVinculacion`, `salario`, `rol`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Atributos simples |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### PACIENTE

**Atributos:** `idPaciente`, `idPersona`, `idPabellon`, `fechaNacimiento`, `fechaIngreso`, `diagnostico`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Campos simples |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### PABELLÓN

**Atributos:** `idPabellon`, `nombre`, `capacidad`, `idHospital`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Atributos atómicos |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### EQUIPO MÉDICO

**Atributos:** `idEquipo`, `nombre`, `idHospital`, `idLider`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Campos simples |
| 2FN | Yes | PK: `idEquipo` |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### DOCTOR-EQUIPO

**Atributos:** `idRelacion`, `idDoctor`, `idEquipo`, `rol`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Campos simples |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

### ATENCIÓN

**Atributos:** `idAtencion`, `idPaciente`, `idDoctor`, `fecha`, `descripcion`

| Forma | Cumple? | Razón |
|------|--------|-------|
| 1FN | Yes | Campos simples |
| 2FN | Yes | PK única |
| 3FN | Yes | Sin dependencias transitivas |

**Conclusión:** En **3FN**

---

## Modelo Físico

### Código (MongoDB + Mermaid)

```mermaid
erDiagram
    persona {
        objectId idPersona PK
        string titulo
        string nombre
        string segundoNombre
        string apellido
        string direccion
        string tipoPersona
    }
    hospital {
        objectId idHospital PK
        string nombre
        string direccion
        string ciudad
    }
    departamento {
        objectId idDepartamento PK
        string nombre
        objectId idHospital FK
    }
    personal {
        objectId idPersonal PK
        objectId idPersona FK
        objectId idDepartamento FK
        date fechaVinculacion
        decimal salario
        string rol
    }
    pabellon {
        objectId idPabellon PK
        string nombre
        int capacidad
        objectId idHospital FK
    }
    paciente {
        objectId idPaciente PK
        objectId idPersona FK
        objectId idPabellon FK
        date fechaNacimiento
        date fechaIngreso
        string diagnostico
    }
    equipoMedico {
        objectId idEquipo PK
        string nombre
        objectId idHospital FK
        objectId idLider FK
    }
    doctorEquipo {
        objectId idRelacion PK
        objectId idDoctor FK
        objectId idEquipo FK
        string rol
    }
    atencion {
        objectId idAtencion PK
        objectId idPaciente FK
        objectId idDoctor FK
        date fecha
        string descripcion
    }

    hospital ||--o{ departamento : "tiene"
    hospital ||--o{ pabellon : "contiene"
    hospital ||--o{ equipoMedico : "organiza"
    departamento ||--o{ personal : "vincula"
    pabellon ||--o{ paciente : "alberga"
    persona ||--o{ personal : "es"
    persona ||--o{ paciente : "puede_ser"
    equipoMedico ||--o{ doctorEquipo : "incluye"
    persona ||--o{ doctorEquipo : "participa"
    persona ||--o{ atencion : "atiende"
    paciente ||--o{ atencion : "recibe"
