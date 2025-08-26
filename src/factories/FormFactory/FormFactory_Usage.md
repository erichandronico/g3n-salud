# 📄 Uso del componente `FormFactory`

`FormFactory` es un componente dinámico de React que genera formularios a partir de una configuración (`config`) usando `react-hook-form`, incluyendo soporte para campos repetibles como listas de indicaciones médicas.

---

## ✨ Importación

```tsx
import { FormFactory } from './FormFactory';
```

---

## ⚙️ Definición de la configuración

```tsx
const formConfig = {
  title: 'Indicaciones Médicas',
  fields: [
    {
      type: 'array',
      name: 'indicaciones',
      label: 'Indicaciones',
      fields: [
        { name: 'medicamento', label: 'Medicamento', type: 'text', fields: [] },
        { name: 'dosis', label: 'Dosis', type: 'text', fields: [] },
        { name: 'frecuencia', label: 'Frecuencia', type: 'text', fields: [] },
      ]
    }
  ]
};
```

---

## 🚀 Uso en un componente

```tsx
export default function App() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <FormFactory config={formConfig} />
    </div>
  );
}
```

---

## 🧾 Estructura esperada de `config`

```ts
interface FieldConfig {
  name: string;
  label: string;
  type: string;
  fields: FieldConfig[];
}

interface FormConfig {
  title: string;
  fields: (
    FieldConfig | {
      type: 'array';
      name: string;
      label: string;
      fields: FieldConfig[];
    }
  )[];
}
```

---

## 📦 Características actuales

- ✅ Generación de campos tipo `array` dinámicamente.
- ✅ Botón para agregar elementos al array.
- ✅ Botón para eliminar elementos del array.
- ✅ Integración completa con `react-hook-form`.

---

## 📤 Al enviar el formulario

Los datos se imprimen en consola en el siguiente formato:

```json
{
  "indicaciones": [
    {
      "medicamento": "Paracetamol",
      "dosis": "500mg",
      "frecuencia": "Cada 8h"
    }
  ]
}
```

---

## 🛠️ Siguientes pasos sugeridos

- Agregar validaciones por campo.
- Soporte para tipos de campo adicionales (`select`, `checkbox`, etc.).
- Agrupación visual o secciones.