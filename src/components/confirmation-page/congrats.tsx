import { useUserStore } from "../../store/user"

export const Congrats = () => {

  const store = useUserStore()

  const {fullName, email} = store

  const name = fullName.split(" ")[0];
  const lastname = fullName.split(" ")[1];

  return (
    <>
      <p className="text-[29px]/8 font-extrabold text-center mb-6">Congrats, 
        <span className="bg-linear-to-r from-orange-500 to-Neutral-0 bg-clip-text text-transparent"> {name} </span> 
        <span className="bg-linear-to-r from-orange-500 to-Neutral-0 bg-clip-text text-transparent">{lastname}! </span> 
      Your ticket is ready.</p>

      <p className="text-[19px] text-center mb-20 text-neutral-300">We've emailed your ticket 
        <span className="text-orange-500"> {email} </span> 
      to and will send updates in the run up to the event.</p>
    </>
  )
}