/**
 * file: src/services/EmployeeService.js
 * data: 01/03/2023
 * description: file responsible for the Apis requests by HTTP
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import Api from "./Api";

export default {
  /**
   * Create a new 'Employee'
   * (POST): http://localhost:5000/api
   */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post("/employee", employee);
      return response.data.value;
    } catch (error) {
      if (error.response.status === 409) {
        throw new Error("Employee already exists!", error);
      }
      console.error(error);
      throw new Error("Error!");
    }
  },

  /**
   * List All 'Employees'
   * (GET): http://localhost:5000/api
   */
  async getEmployees() {
    try {
      const response = await Api().get("/employee");
      return response.data.value;
    } catch (error) {
      console.error(error);
      throw new Error("Error!");
    }
  },

  /**
   * List 'Employee' by Id
   * (GET): http://localhost:5000/api/employee/employee_id/1
   */
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employee/employee_id/${id}`);
      return response.data.value[0];
    } catch (error) {
      if (error.response.status === 404) {
        throw new Error("Employee not found!", error);
      }
      console.error(error);
      throw new Error("Error!");
    }
  },

  /**
   * Update 'Employee' by Id
   * (PUT): http://localhost:5000/api/employee/employee_id/1
   */
  async updateEmployee(employee) {
    try {
      const id = employee.employee_id;
      const removeEmployeeId = { ...employee };
      delete removeEmployeeId.employee_id;

      const response = await Api().put(`/employee/employee_id/${id}`, removeEmployeeId);
      if (response.status === 200) {
        return response.data.value;
      }
      throw new Error("Error!");
    } catch (error) {
      if (error.response.status === 404) {
        throw new Error("Employee not found!", error);
      }
      console.error(error);
      throw new Error("Error!");
    }
  },

  /**
   * Delete 'Employee' by Id
   * (DELETE): http://localhost:5000/api/employee/employee_id/1
   */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employee/employee_id/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error!");
    }
  },
};
