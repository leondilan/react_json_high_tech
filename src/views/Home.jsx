import React from 'react'
import { Link } from 'react-router'
import {UserRoundPlus,UserRoundX,UserPen} from "lucide-react";

export default function Home() {
  return (
    <main className="container mt-3">
      <h3 className='text-center'>Listes des etudiants</h3>
      <section className="row d-flex justify-content-center">
        <div className="col-md-8">
            <Link to="/create" className="btn btn-outline-primary btn-lg">
              <UserRoundPlus />{" "}
              New
            </Link>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Age</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Poids</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <Link to="/update/3" className="text-primary me-3">
                        <UserPen />
                      </Link>
                      <span role='button'>
                        <UserRoundX color="red"/>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </section>
    </main>
  )
}