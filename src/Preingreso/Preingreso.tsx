import { FormFactory } from "../factories/FormFactory/FormFactory";
import { preingresoFormConfig } from "./PreingresoFormConfig.tsx";
import { MainLayout } from "../layouts/MainLayout/MainLayout"

export const Pregingreso = () => {
  return (
    <MainLayout>
        <div className="pt-0">
        {/* <hr className="text-gray-300 "/> */}
        <div className="mb-2 mt-4"></div>
            {/* <h2 className="text-base font-semibold mb-2 mt-4 ">Pre-ingreso</h2> */}
            <FormFactory config={preingresoFormConfig} />
        </div>
    </MainLayout>
  )
}
