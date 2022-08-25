import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { IoIosMail, IoIosKey } from "react-icons/io";
import swal from 'sweetalert2';


export function Index() {
  const [user, serUser] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    swal.fire(
      'Good job,it was sent correctly!',
      'You clicked the button!',
      'success'
    )
    console.log(data);
    serUser(data);
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="titleForm">
            <h1>Form</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="formBody">
            <div>
              <label><IoIosMail/>Email</label>
              <input
                type="text"
                className="form-control my-2"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p>El email es requerido!</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>El formato email es incorrecto!</p>
              )}
            </div>
            <div>
              <label><IoIosKey/>Password</label>
              <input
                type="password"
                className="form-control my-2"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p>La contraseña es requerida!</p>
              )}
              {errors.password?.type === "pattern" && (
                <p>
                  Minimo 8 caracteres, maximo 15, Al menos una letra mayúscula,
                  al menos una letra minucula, al menos un dígito No espacios en
                  blanco, al menos 1 caracter especial!
                </p>
              )}
            </div>

            <button className="btn btn-dark">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Index;
