import { UploadInput } from "./upload-input"
import { TextInput } from "./tetx-input"
import { Button } from "./button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useShowTicket } from "../../../hooks/use-show-ticket"
import { useUserStore } from "../../../store/user"

import { useState, type ChangeEvent } from "react"

type Inputs = {
  fullName: string;
  email: string;
  githubUser: string;
}

export const Form = () => {

    const [imageUrl, setImageUrl] = useState<string>('')

  const {
    register,
    formState: {errors},
    handleSubmit
    } = useForm<Inputs>()

    const context = useShowTicket()
    const userStore = useUserStore();

    const sendForm : SubmitHandler<Inputs> = (data : Inputs) => {
      const {email, fullName, githubUser} = data;
      
      context.setShowTicket(true);
      
      userStore.setUser({
        email,
        fullName,
        githubUser,
        url: imageUrl
      })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file){
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

    return (
        <form className="" onSubmit={handleSubmit(sendForm)}>
            <UploadInput
            url={imageUrl}
            onChange={handleChange}
            />

            <div className="flex flex-col gap-4">  
            <TextInput
              {...register("fullName", {required: "Full Name es requerido"})}
              label="Full Name"
              placeholder="Jonatan Kristof"
              isError={errors.fullName?.type === 'required'}
              errorMenssage={errors.fullName?.message}
            />
            <TextInput
              {...register("email", {required: "Email Address es requerido", 
                pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
              })}
              label="Email Address"
              placeholder="jonatan@gmail.com"
              type="email"
              isError={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
              errorMenssage={errors.email?.message || 'Ingrese un email válido'}
            />
            <TextInput
              {...register("githubUser")}
              label="GitHub Username"
              placeholder="@jonatankristof0101"
            />
            </div>

            <div className="mt-10">
            <Button/>
            </div>
        </form>
    )
}
