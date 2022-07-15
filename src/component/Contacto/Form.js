import React from "react";
import { useForm } from "react-hook-form";
export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      
      
      {/* include validation with required or other standard HTML validation rules */}
      <div class="row mb-3">
        <div class="col-sm-12 col-md-6 ">
          <label for="name" class="form-label">Nombre</label>
          <input
            class="form-control"
            id="name"
            {...register("firstName", { required: true })}
            placeholder="Nombre"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <label for="lastName" class="form-label" >Apellido</label>
          <input  class="form-control" id="lastName" {...register("LastName", { required: true })}  placeholder="Apellido"/>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <label for="email" class="form-label">Correo Electrónico </label>
          <input type="email" class="form-control" id="email"  {...register("email", { required: true })}  placeholder="Correo Electrónico"/>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-12 col-md-4">
          <label for="city" class="form-label">Ciudad</label>
          <input class="form-control" id="city" {...register("city", { required: true })}  placeholder="Ciudad"/>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="typeOfDocument" class="form-label">Tipo de documento</label>
          <select class="form-control" id="typeOFDocument" {...register("typeOfDocument")} placeholder="Tipo De documento">
            <option value="female">C.C</option>
            <option value="male">C.E</option>
            <option value="other">Pasaporte</option>
          </select>
        </div>
        <div class="col-sm-12 col-md-4">
          <label for="numberOfDocument" class="form-label">Número de documento</label>
          <input type="number" class="form-control" id="numberOfDocument" {...register("numberOfDocument", { required: true })}  placeholder="Número de documento"/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col-12">
          <label for="message" class="form-label">Mensaje</label>
          <textarea row="6" class="form-control" id="message" {...register("Message", { required: true })}  placeholder="Mensaje"/>
        </div>
      </div>
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>Este Campo es requerido</span>}
      
      <input class="primary-btn" type="submit" />
    </form>
  );
}