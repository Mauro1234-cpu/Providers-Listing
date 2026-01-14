import { useTranslation } from "react-i18next";

import { Button } from "@/components";

export const Success = () => {
  const { t } = useTranslation();

  return (
    <body className="dm-sans relative flex h-full min-h-screen flex-col items-center justify-center bg-linear-to-t from-emerald-300/60 to-emerald-100/20 bg-center bg-no-repeat px-4">
      <div className="flex w-full flex-col items-center px-5">
        <div className="my-30 flex flex-col items-center gap-5 text-center md:w-4/5">
          {/* <img src="icons/Success.png" alt="Success icon"/> */}
          <h2 className="text-3xl">{t("register.success")}</h2>
          <p className="text-base font-normal">{t("register.successDesc")}</p>
        </div>
      </div>
      <button
        className="absolute bottom-12 flex w-7/8 cursor-pointer justify-center gap-3 rounded-md border border-transparent bg-slate-700 p-1 text-white hover:bg-slate-600 active:ring-2 active:ring-slate-700 active:ring-offset-2 disabled:bg-gray-200 md:static md:w-100"
        type="button"
      >
        {t("register.redirect")}
      </button>
      <Button />
      {/* <button className="flex justify-center absolute bottom-12 w-7/8 p-1 gap-3 cursor-pointer bg-slate-700 rounded-md text-white border border-transparent hover:bg-slate-600 active:ring-2 active:ring-offset-2 active:ring-slate-700 disabled:bg-gray-200 md:static md:w-100" type="button">Go to login</button> */}
    </body>
  );
};
