"use client";
import { lusitana } from "@/app/ui/font";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";
import {
  ArrowRightIcon,
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import Button from "./button";

export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  return (
    <form className=" space-y-3" action={dispatch}>
      <div className=" flex-1 px-6 pb-4 pt-8 bg-gray-100 rounded-lg">
        <h1 className={`${lusitana.className} mb-3 text-2xl text-center`}>
          Please Log In to continue
        </h1>
        <div className=" w-full">
          <div>
            <label
              className="mb-3 mt-5 text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              E-mail
            </label>
            <div className=" relative">
              <input
                id="email"
                type="email"
                name="email"
                required
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-1 placeholder-gray-400"
                placeholder="Enter your email address "
              />
              <AtSymbolIcon className=" pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px]  text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              PassWord
            </label>
            <div className=" relative">
              <input
                id="password"
                type="password"
                name="password"
                required
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-1 placeholder-gray-400"
                placeholder="Enter your Password "
              />
              <KeyIcon className=" pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px]  text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <LogInFormButton />
        </div>
        <div
          aria-atomic="true"
          aria-live="polite"
          className="flex items-end space-x-1 h-8"
        >
          {state === "CredentialsSignin" && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Invalide credentials</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

const LogInFormButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button className="w-full mt-4" aria-disabled={pending}>
        Log In <ArrowRightIcon className="h-5 w-5 ml-auto text-" />
      </Button>
    </>
  );
};
