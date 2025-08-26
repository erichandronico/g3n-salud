import { FormFactory } from "../factories/FormFactory/FormFactory";
import type { FormConfig } from "../factories/FormFactory/FormFactory.types";
import { MainLayout } from "../layouts/MainLayout/MainLayout"

const patologias: string[] = [
  "Laringomalasia",
  "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
  "Asma",
  "Neumonía",
  "Bronquitis crónica",
  "Fibrosis pulmonar",
  "Insuficiencia cardíaca congestiva",
  "Hipertensión arterial",
  "Diabetes mellitus tipo 1",
  "Diabetes mellitus tipo 2",
  "Pie diabético",
  "Enfermedad renal crónica",
  "Hemodiálisis domiciliaria",
  "Hipotiroidismo",
  "Hipertiroidismo",
  "Accidente cerebrovascular (ACV)",
  "Secuelas de traumatismo craneoencefálico",
  "Epilepsia",
  "Esclerosis múltiple",
  "Esclerosis lateral amiotrófica (ELA)",
  "Parkinson",
  "Alzheimer",
  "Demencia senil",
  "Artritis reumatoide",
  "Artrosis",
  "Lupus eritematoso sistémico",
  "Úlceras por presión",
  "Fracturas en recuperación",
  "Enfermedad de Huntington",
  "Enfermedad de Crohn",
  "Colitis ulcerosa",
  "Insuficiencia hepática",
  "Cirrosis hepática",
  "Cáncer en cuidados paliativos",
  "Cáncer en tratamiento domiciliario",
  "VIH/SIDA",
  "Tuberculosis en tratamiento domiciliario",
  "Dependencia postquirúrgica",
  "Traqueostomía",
  "Ventilación mecánica domiciliaria",
  "Dependencia de oxigenoterapia",
  "Nutrición parenteral domiciliaria",
  "Desnutrición crónica",
  "Obesidad mórbida",
  "Depresión mayor",
  "Esquizofrenia",
  "Trastorno bipolar",
  "Autismo con dependencia severa",
  "Síndrome de Down con complicaciones médicas"
];


const formConfig: FormConfig = {
  title: 'Pre-ingreso de Paciente',
  sections: [
    {
      title: 'Datos del paciente',
      colCount: 4,
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Nombre',
          colSpan: 1,
        },
        {
          type: 'string',
          name: 'secondName',
          label: 'Apellido',
          colSpan: 1,
        },
        {
          type: 'datetime',
          name: 'birthDate',
          label: 'Fecha de Nacimiento',
          colSpan: 1,
        },
        {
            type: 'select',
            name: 'isapre',
            label: 'Isapre / Fonasa',
            colSpan: 1,
            options: [
              'Banmédica',
              'Colmena',
              'Consalud',
              'Cruz Blanca',
              'Nueva Masvida',
              'Vida Tres',
              'Fonasa'
            ],
            // placeholder opcional:
            placeholder: 'Escribe para buscar...'
          }
      ]
    },
    {
      title: 'Datos del ingreso',
      colCount: 4,
      fields: [
        {
          type: 'string',
          name: 'CentroDeriva',
          label: 'Centro que Deriva',
          colSpan: 2,
        },
        {
          type: 'select',
          name: 'patologia',
          label: 'Patología',
          colSpan: 2,
          options: patologias
        },
      ]
    },
    {
      title: 'Indicaciones',
      colCount: 4,
      fields: [
        {
          type: 'array',
          name: 'indicaciones',
          label: 'Indicaciones',
          colSpan: 3,
          fields: [
            { name: 'medicamento', label: 'Medicamento', type: 'string' },
            { name: 'dosis', label: 'Dosis', type: 'string' },
            { name: 'frecuencia', label: 'Frecuencia', type: 'string' },
          ],
        }
      ]
    }
  ]
};

export const Pregingreso = () => {
  return (
    <MainLayout>
        <div className="pt-4">
        {/* <hr className="text-gray-300 "/> */}
        <div className="mb-2 mt-4"></div>
            {/* <h2 className="text-base font-semibold mb-2 mt-4 ">Pre-ingreso</h2> */}
            <FormFactory config={formConfig} />
        </div>
    </MainLayout>
  )
}
