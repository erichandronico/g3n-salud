import type { FormConfig } from "../factories/FormFactory/FormFactory.types";
import { FaPills, FaUser, FaNotesMedical, FaUtensils, FaProcedures, FaToolbox, FaHospitalUser} from 'react-icons/fa';


export const preingresoFormConfig: FormConfig = {
  title: 'Pre-ingreso de Paciente',
  icon: FaHospitalUser,
  sections: [
    {
      title: 'Datos del Paciente',
      icon: FaUser,
      colCount: 4,
      fields: [
        { type: 'string', name: 'name', label: 'Nombre', colSpan: 1 },
        { type: 'string', name: 'secondName', label: 'Apellido', colSpan: 1 },
        { type: 'string', name: 'rut', label: 'RUT', colSpan: 1 },
        { type: 'datetime', name: 'birthDate', label: 'Fecha de Nacimiento', colSpan: 1 },
        { type: 'string', name: 'procedencia', label: 'Procedencia', colSpan: 1 },
        { type: 'string', name: 'habitacion', label: 'Habitación', colSpan: 1 },
        { type: 'string', name: 'direccion', label: 'Dirección del paciente', colSpan: 2 },
        { type: 'string', name: 'telefono', label: 'Teléfono', colSpan: 1 },
        { type: 'string', name: 'familiarResponsable', label: 'Familiar responsable', colSpan: 1 },
        { type: 'string', name: 'telefonoFamiliar', label: 'Teléfono responsable', colSpan: 1 },
        { type: 'string', name: 'familiarEconomico', label: 'Responsable económico', colSpan: 1 },
        { type: 'string', name: 'telefonoEconomico', label: 'Teléfono económico', colSpan: 1 },
        { type: 'string', name: 'email', label: 'Correo electrónico', colSpan: 2 },
        {
          type: 'select',
          name: 'isapre',
          label: 'Isapre / Fonasa',
          options: ['Banmédica', 'Colmena', 'Consalud', 'Cruz Blanca', 'Nueva Masvida', 'Vida Tres', 'Fonasa'],
          placeholder: 'Escribe para buscar...',
          colSpan: 1
        },
        { type: 'boolean', name: 'particular', label: 'Particular', colSpan: 1 },
        { type: 'string', name: 'medicoTratante', label: 'Médico tratante', colSpan: 2 },
        { type: 'string', name: 'rutMedico', label: 'RUT médico', colSpan: 1 },
        { type: 'string', name: 'telefonoMedico', label: 'Teléfono médico', colSpan: 1 },
        { type: 'string', name: 'emailMedico', label: 'Correo médico', colSpan: 2 }
      ]
    },
    {
      title: 'Antecedentes Clínicos',
      icon: FaNotesMedical,
      colCount: 4,
      fields: [
        { type: 'string', name: 'diagnostico', label: 'Diagnóstico en tratamiento', colSpan: 2 },
        { type: 'string', name: 'antecedentesMor', label: 'Antecedentes mórbidos', colSpan: 2 },
        { type: 'string', name: 'anamnesis', label: 'Anamnesis', colSpan: 2 },
        { type: 'string', name: 'antecedentesQx', label: 'Antecedentes quirúrgicos', colSpan: 2 },
        { type: 'string', name: 'alergias', label: 'Alergias', colSpan: 2 },
        { type: 'string', name: 'lesiones', label: 'Lesiones / heridas', colSpan: 2 },
        { type: 'string', name: 'paresias', label: 'Paresias / plejías', colSpan: 2 }
      ]
    },
    {
      title: 'Fármacos',
      icon: FaPills,
      colCount: 4,
      fields: [
        {
          type: 'array',
          name: 'farmacos',
          label: 'Fármacos',
          colSpan: 4,
          colCount: 4,
          fields: [
            { type: 'string', name: 'medicamento', label: 'Medicamento', colSpan: 2 },
            { type: 'string', name: 'dosis', label: 'Dosis', colSpan: 1 },
            { type: 'string', name: 'via', label: 'Vía de administración', colSpan: 1 },
            { type: 'string', name: 'horario', label: 'Horario',  colSpan: 2 },
            { type: 'boolean', name: 'entregadoFamilia', label: 'Entregado por familia',  colSpan: 1 },
            { type: 'boolean', name: 'entregadoXinermed', label: 'Entregado por Xinermed',  colSpan: 1 }
          ]
        }
      ]
    },
    {
      title: 'Alimentación',
      icon: FaUtensils,
      colCount: 3,
      fields: [
        { type: 'select', name: 'viaAlimentacion', label: 'Vía de administración', options: ['Enteral', 'Parenteral', 'Oral'], colSpan: 1 },
        { type: 'boolean', name: 'alimFamilia', label: 'Entregado por familia', colSpan: 1 },
        { type: 'boolean', name: 'alimXinermed', label: 'Entregado por Xinermed', colSpan: 1 }
      ]
    },
    {
      title: 'Elementos Invasivos',
      icon: FaProcedures,
      colCount: 5,
      fields: [
        {
          type: 'array',
          name: 'elementosInvasivos',
          label: 'Dispositivos',
          colSpan: 5,
          colCount: 5,
          fields: [
            { type: 'string', name: 'tipo', label: 'Tipo de dispositivo' },
            { type: 'string', name: 'cantidad', label: 'N°' },
            { type: 'string', name: 'dias', label: 'N° días' },
            { type: 'string', name: 'ubicacion', label: 'Ubicación' },
            { type: 'string', name: 'detalle', label: 'Detalle opcional' }
          ]
        }
      ]
    },
    {
      title: 'Equipamiento solicitado',
      icon: FaToolbox,
      colCount: 2,
      fields: [
        {
          type: 'checkbox-group',
          name: 'equipos',
          label: 'Equipos',
          options: [
            'Cilindro de oxígeno', 'Concentrador', 'Colchón antiescara', 'Catre clínico',
            'Nebulizador', 'Mesa clínica', 'Alzarropa', 'Silla neurológica', 'Bomba de infusión',
            'Monitor cardiorrespiratorio', 'Toma presión', 'Glucómetro'
          ],
          colSpan: 2
        }
      ]
    }
  ]
};