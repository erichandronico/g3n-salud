// interface FieldConfig {
//   name: string;
//   label: string;
//   type: string;
//   fields?: FieldConfig[];
// }

export interface FieldConfig {
  name: string;
  label: string;
  type: 'string' | 'number' | 'datetime' | 'object' | 'array' | 'select' | 'boolean' | 'checkbox-group';
  fields?: FieldConfig[]; // para objetos y arrays
  colSpan?: number;       // para control de layout
  colCount?: number;
  options?: string[] | { label: string; value: string }[]; // solo para selects
  placeholder?: string;  // solo para selects
}

// export interface ArrayFieldConfig extends FieldConfig {
//   type: 'array';
//   fields: FieldConfig[];
//   colCount?: number;
// }

export interface FieldSection {
  title: string;
  colCount?: number;
  fields: FieldConfig[];
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FormConfig {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  colCount?: number;           // para diseño general si no hay sections
  sections: FieldSection[];
    fields?: FieldConfig[];      // cuando no se usa sections
}
