import clsx from 'clsx';
import { useForm, useFieldArray } from 'react-hook-form';
import type { FormConfig, FieldConfig, FieldSection } from './FormFactory.types';
import { FiPlus, FiTrash2, FiSend, FiChevronDown } from 'react-icons/fi';

export const FormFactory: React.FC<{ config: FormConfig }> = ({ config }) => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Datos enviados:', data);
  };

  // Tailwind no puede detectar clases dinámicas como `sm:col-span-${n}`.
  // Mapeamos explícitamente para que el JIT genere las utilidades.
  const smColSpan = (n: number) => {
    switch (n) {
      case 1: return 'sm:col-span-1';
      case 2: return 'sm:col-span-2';
      case 3: return 'sm:col-span-3';
      case 4: return 'sm:col-span-4';
      case 5: return 'sm:col-span-5';
      case 6: return 'sm:col-span-6';
      case 7: return 'sm:col-span-7';
      case 8: return 'sm:col-span-8';
      case 9: return 'sm:col-span-9';
      case 10: return 'sm:col-span-10';
      case 11: return 'sm:col-span-11';
      case 12: return 'sm:col-span-12';
      default: return 'sm:col-span-1';
    }
  };

  const labelClass = 'text-[0.9rem] font-medium text-slate-700';
  const inputClass = 'block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 disabled:opacity-60 placeholder:text-slate-400 transition';
  const btnPrimary = 'inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-500/20 transition';
  const btnSecondary = 'inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:ring-4 focus:ring-slate-400/10 transition';
  const btnIconDanger = 'inline-flex items-center justify-center rounded-md border border-red-200 bg-white text-red-600 hover:bg-red-50 active:bg-red-100 focus:ring-4 focus:ring-red-500/20 w-8 h-8';

  type ArrayFieldConfig = FieldConfig & { fields?: FieldConfig[] };

  function ArrayField({ field, parentName }: { field: ArrayFieldConfig; parentName?: string }) {
    const name = parentName ? `${parentName}.${field.name}` : field.name;
    const { fields: items, append, remove } = useFieldArray({ control, name });

    const colSpan = field.colSpan || 1;
    const baseClass = clsx('space-y-1', 'col-span-1', smColSpan(colSpan));

    const newItemDefaults = () => {
      const obj: any = {};
      (field.fields || []).forEach(sf => { obj[sf.name] = ''; });
      return obj;
    };

    return (
      <div className={baseClass}>
        <label className={clsx(labelClass)} style={{ marginRight: 10}}>{field.label}</label>
        {items.map((item, index) => (
          <div key={item.id} className="mb-2 grid grid-cols-[1fr_40px] gap-2 items-center">
            <div className={clsx('grid gap-2', gridColsClass(field.colCount || 1))}>
              {(field.fields || []).map(subField => {
                const subName = `${name}.${index}.${subField.name}`;
                const subColSpan = subField.colSpan || 1;
                const subBaseClass = clsx('space-y-1', 'col-span-1', smColSpan(subColSpan));

                if ((subField as any).type === 'select') {
                  const opts: any[] = (subField as any).options || [];
                  const listId = `list-${subName.replace(/[^a-zA-Z0-9_-]/g, '')}`;
                  return (
                    <div key={subField.name} className={subBaseClass}>
                      <div className="relative">
                        <input
                          list={listId}
                          {...register(subName)}
                          className={clsx(inputClass, 'pr-10')}
                          placeholder={subField.label}
                        />
                        <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      </div>
                      <datalist id={listId}>
                        {opts.map((opt: any) => {
                          const value = typeof opt === 'string' ? opt : (opt.value ?? opt.label ?? '');
                          const label = typeof opt === 'string' ? opt : (opt.label ?? opt.value ?? '');
                          return <option key={value} value={value}>{label}</option>;
                        })}
                      </datalist>
                    </div>
                  );
                }

                if (subField.type === 'string' || subField.type === 'number' || subField.type === 'datetime') {
                  return (
                    <div key={subField.name} className={subBaseClass}>
                      <input
                        type={subField.type === 'datetime' ? 'datetime-local' : subField.type}
                        {...register(subName)}
                        placeholder={subField.label}
                        className={inputClass}
                      />
                    </div>
                  );
                }

                if (subField.type === 'boolean') {
                  return (
                    <div key={subField.name} className={subBaseClass + ' flex items-center gap-2'}>
                      <input
                        type="checkbox"
                        {...register(subName)}
                        className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                      />
                      <label className={labelClass}>{subField.label}</label>
                    </div>
                  );
                }

                return (
                  <div key={subField.name} className={subBaseClass}>
                    {renderField(subField, `${name}.${index}`)}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center h-full">
              <button
                type="button"
                onClick={() => remove(index)}
                className={btnIconDanger}
                aria-label="Eliminar"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => append(newItemDefaults())} className={clsx(btnSecondary, 'mt-1')}>
          <FiPlus /> Agregar
        </button>
      </div>
    );
  }

  // Helper para renderizar un campo con colSpan y soporte para objetos y arrays
  const renderField = (field: FieldConfig, parentName?: string) => {
    const fieldName = parentName ? `${parentName}.${field.name}` : field.name;
    const colSpan = field.colSpan || 1;
    const baseClass = clsx('space-y-1', 'col-span-1', smColSpan(colSpan));

    if (field.type === 'array') {
      return <ArrayField key={field.name} field={field as any} parentName={parentName} />;
    }

    // Campo tipo "select" con búsqueda usando <datalist>
    if ((field as any).type === 'select') {
      const options: any[] = (field as any).options || [];
      const listId = `list-${fieldName.replace(/[^a-zA-Z0-9_-]/g, '')}`;
      return (
        <div key={field.name} className={baseClass}>
          <label className={clsx(labelClass, 'mb-1')}>{field.label}</label>
          <div className="relative">
            <input
              list={listId}
              {...register(fieldName)}
              className={clsx(inputClass, 'pr-10')}
              placeholder={(field as any).placeholder || 'Seleccione...'}
            />
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          <datalist id={listId}>
            {options.map((opt: any) => {
              const value = typeof opt === 'string' ? opt : (opt.value ?? opt.label ?? '');
              const label = typeof opt === 'string' ? opt : (opt.label ?? opt.value ?? '');
              return (
                <option key={value} value={value}>{label}</option>
              );
            })}
          </datalist>
        </div>
      );
    }
    if (field.type === 'string' || field.type === 'number' || field.type === 'datetime') {
      return (
        <div key={field.name} className={baseClass}>
          <label className={clsx(labelClass, 'mb-1')}>{field.label}</label>
          <input
            type={field.type === 'datetime' ? 'datetime-local' : field.type}
            {...register(fieldName)}
            className={inputClass}
          />
        </div>
      );
    }
    if (field.type === 'checkbox-group') {
      return (
        <div key={field.name} className={baseClass}>
          <label className={clsx(labelClass, 'block mb-2')}>{field.label}</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(field as any).options?.map((option: string) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={option}
                  {...register(fieldName)}
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <span className="text-sm text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      );
    }

    if (field.type === 'boolean') {
      return (
          <div key={field.name} className={baseClass + ' flex items-center gap-2'}>
            <input
              type="checkbox"
              {...register(fieldName)}
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            />
            <label className={clsx(labelClass, 'mb-0')}>{field.label}</label>
          </div>
        );
      }

    if (field.type === 'object') {
      return (
        <div key={field.name} className={baseClass}>
          <label className={clsx(labelClass, 'mb-1')}>{field.label}</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {field?.fields?.map(subField => renderField(subField, fieldName))}
          </div>
        </div>
      );
    }

    return null;
  };

  const gridColsClass = (count: number) => {
    switch (count) {
      case 1: return 'sm:grid-cols-1';
      case 2: return 'sm:grid-cols-2';
      case 3: return 'sm:grid-cols-3';
      case 4: return 'sm:grid-cols-4';
      case 5: return 'sm:grid-cols-5';
      case 6: return 'sm:grid-cols-6';
      case 7: return 'sm:grid-cols-7';
      case 8: return 'sm:grid-cols-8';
      case 9: return 'sm:grid-cols-9';
      case 10: return 'sm:grid-cols-10';
      case 11: return 'sm:grid-cols-11';
      case 12: return 'sm:grid-cols-12';
      default: return 'sm:grid-cols-1';
    }
  };

  // Renderiza una sección con su propio colCount si existe
  const renderSection = (section: FieldSection) => {
    const colCount = section.colCount || 1;
    const Icon = (section as any).icon;
    return (
      <div key={section.title} className="space-y-3 rounded-2xl border border-gray-100 bg-white/60 p-4">
        <h3 className="text-lg font-semibold text-slate-800 pb-2 border-b border-slate-200 flex items-center gap-2">{Icon ? <Icon className="text-slate-500" /> : null}{section.title}</h3>
        <div className={clsx('grid grid-cols-1 gap-4', gridColsClass(colCount))}>
          {section.fields.map(field => renderField(field))}
        </div>
      </div>
    );
  };

  const Icon = (config as any).icon;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
      <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
        {Icon ? <Icon className="text-slate-500" /> : null}
        {config.title}
      </h2>

      {config.sections
        ? config.sections.map(renderSection)
        : (
          <div className={clsx('grid grid-cols-1 gap-4', gridColsClass(config.colCount || 1))}>
            {config?.fields?.map(field => renderField(field))}
          </div>
        )
      }

      <button type="submit" className={btnPrimary}>
        <FiSend /> Enviar
      </button>
    </form>
  );
};
