import React from 'react'
import { Link,useParams } from 'react-router'
import {Users,CircleUserRound} from "lucide-react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    nom: yup.string().required("Le nom est requis"),
    age: yup.string().required("L'age est requis"),
    classe: yup.string().required("La classe est requise"),
    poids: yup.string().required("Le poids est requis"),
  })
  .required()

export default function Create() {

  const {id}=useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <main className="container mt-3">
      <h3 className='text-center'>Update a étudiants</h3>
      <section className="row d-flex justify-content-center">
        <div className="col-md-8">
            <Link to="/" className="btn btn-outline-primary btn-lg mb-3">
              <Users />{" "}
              Listes
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder="Nom" {...register("nom")}/>
                <span className="text-danger">{errors.nom?.message}</span>
              </div>
              <div className="mb-3">
                <input type="number" className='form-control' placeholder="Age" {...register("age")}/>
                <span className="text-danger">{errors.age?.message}</span>
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder="Classe" {...register("classe")}/>
                <span className="text-danger">{errors.classe?.message}</span>
              </div>
              <div className="mb-3">
                <input type="number" className='form-control' placeholder="Poids" {...register("poids")}/>
                <span className="text-danger">{errors.poids?.message}</span>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  <CircleUserRound /> Update
                </button>
              </div>
            </form>
        </div>
      </section>
    </main>
  )
}