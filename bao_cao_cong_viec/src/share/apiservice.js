import React from 'react'
import Global from '../share/global'
import axios from 'axios'
import notify from 'devextreme/ui/notify';

function GetToken() {
  return localStorage.getItem('token')
}

function GetHeader() {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GetToken()}`
  }
}
class ApiService {
  // constructor(){
  //   this.token = GetToken();
  //   console.log("token",this.token);
  //   this.state = {
  //     url_server: Global.url_server,
  //     headers: 
  //   }

  //   this.GET = this.GET.bind(this);
  // }

  static checkAuthorised() {
    var ressult = true;
    var token = GetToken();
    if (token === null || token === undefined || token === "") {
      window.location.assign("/");
      ressult = false;
    }
    return ressult;
  }

  static GET(path) {
    return axios.get(Global.url_auth + path, {
      headers: GetHeader()
    }).then((response) => {
      return response;
    }
    ).catch((response) => {
      unAuthorised(response);
    })
  }

  static POST(path, data) {
    return axios.post(Global.url_auth + path, data, {
      headers: GetHeader()
    }).then((response) => {
      return response;
    }).catch((response) => {
      unAuthorised(response);
    });
  }

  static PUT(path, data) {
    return axios.put(Global.url_auth + path, data, {
      headers: GetHeader()
    }).then((response) => {
      return response;
    }).catch((response) => {
      unAuthorised(response);
    });
  }

  static DELETE(path) {
    return axios.delete(Global.url_auth + path, {
      headers: GetHeader()
    }).then((response) => {
      return response;
    }).catch((response) => {
      unAuthorised(response);
    });;
  }

  // static Logout(){
  //   return this.GET("api/Auth/Logout")
  //   .then((data) => data)
  //   .catch();
  // }
  ////////REPORT/////////////////////////////////////////

  // Ham nay xem  cac bao cao cua cap duoi
  static UpdateReport(updateReport)
  {
    return this.PUT("api/reports/updateReport",updateReport).then(data=>data)
      .catch()
  }


  static GetReportCanRead()
  {
    return this.POST('api/reports/getReports',{
      "companyId": "",
      "branchId": null,
      "departmentId": null,
      "teamId": "",
      "beginTime": "2020-03-02T04:01:43.959Z",
      "endTime": "2020-05-02T04:01:43.959Z",
      "startIndex": 0,
      "limit": 0
    }).then(data=>data)
      .catch()
  }
  static GetReportDetailByReportId(reportId)
  {
    return this.GET(`api/reports/getReportDetailById/${reportId}`).then(data=>data)
      .catch()
  }

  static GetSendReportByUserId(userId)
  {
    return this.GET(`api/reports/getReportByUserId/${userId}`).then(data=>data)
      .catch()
  }

  static PostReport(data) {
    return this.POST("api/reports/createReport", data).then((data) => data)
      .catch()
  }

  static GetUserInfor() {
    return this.GET("api/user/getUserInfo").then(data => data)
      .catch()
  }

  static GetUsers() {
    var req = {
      "companyId": "",
      "branchId": null,
      "departmentId": null,
      "teamId": ""
    };
    return this.POST("api/user/getUsers", req).then(data => data)
      .catch()
  }

  ///////// COMPANY /////////////////////////////////////////////
  static GetCompanys() {
    return this.GET("api/companies/getCompanies").then(data => data)
      .catch()
  }

  static UpdateCompanys(id, req) {
    return this.PUT(`api/companies/updateCompany/${id}`, req).then(data => data)
      .catch()
  }

  static DeleteCompanys(id) {
    return this.DELETE(`api/companies/deleteCompany/${id}`).then(data => data)
      .catch()
  }

  static CreateCompanys(req) {
    return this.POST(`api/companies/createCompany`, req).then(data => data)
      .catch()
  }
  ///////////////////////////////////////////////////////////////

  ///////// BRANCH /////////////////////////////////////////////
  static GetBranchs() {
    return this.GET("api/branches/getBranches").then(data => data)
      .catch()
  }

  static UpdateBranch(id, req) {
    return this.PUT(`api/branches/updateBranch/${id}`, req).then(data => data)
      .catch()
  }

  static DeleteBranch(id) {
    return this.DELETE(`api/branches/deleteBranch/${id}`).then(data => data)
      .catch()
  }

  static CreateBranch(req) {
    return this.POST(`api/branches/createBranch`, req).then(data => data)
      .catch()
  }
  ///////////////////////////////////////////////////////////////

   ///////// DEPARTMENT /////////////////////////////////////////////
   static GetDepartmentByCompanyId()
   {
     return this.GET("api/department/getBranches").then(data=>data)
       .catch()
   }

   static GetDepartmentByBrandId()
   {
     return this.GET("api/department/getBranches").then(data=>data)
       .catch()
   }
 
   static UpdateDepartment(id, req)
   {
     return this.PUT(`api/department/updateDepartment/${id}`, req).then(data=>data)
       .catch()
   }
 
   static DeleteDepartment(id)
   {
     return this.DELETE(`api/department/deleteDepartment/${id}`).then(data=>data)
       .catch()
   }
 
   static CreateDepartment(req)
   {
     return this.POST(`api/department/createDepartment`, req).then(data=>data)
       .catch()
   }
   ///////////////////////////////////////////////////////////////

   ///////// TEAM /////////////////////////////////////////////
   static GetTeamByCompanyId()
   {
     return this.GET("api/team/getTeam").then(data=>data)
       .catch()
   }

   static GetTeamByBrandId()
   {
     return this.GET("api/team/getTeam").then(data=>data)
       .catch()
   }
 
   static UpdateTeam(id, req)
   {
     return this.PUT(`api/team/updateTeam/${id}`, req).then(data=>data)
       .catch()
   }
 
   static DeleteTeam(id)
   {
     return this.DELETE(`api/team/deleteTeam/${id}`).then(data=>data)
       .catch()
   }
 
   static CreateTeam(req)
   {
     return this.POST(`api/team/createTeam`, req).then(data=>data)
       .catch()
   }
   ///////////////////////////////////////////////////////////////

   ///////// USER /////////////////////////////////////////////
   static GetUserByCompanyId()
   {
     return this.GET("api/user/getUser").then(data=>data)
       .catch()
   }

   static GetUserByBrandId()
   {
     return this.GET("api/user/getUser").then(data=>data)
       .catch()
   }
 
   static UpdateUser(id, req)
   {
     return this.PUT(`api/user/updateUser/${id}`, req).then(data=>data)
       .catch()
   }
 
   static DeleteUser(id)
   {
     return this.DELETE(`api/user/deleteUser/${id}`).then(data=>data)
       .catch()
   }
 
   static CreateUser(req)
   {
     return this.POST(`api/user/createUser`, req).then(data=>data)
       .catch()
   }
   ///////////////////////////////////////////////////////////////
} 

export default ApiService;

function unAuthorised(data) {
  // kiểm tra coi có mã 401 không
  if(data.response === null || data.response == undefined)
  {
    console.log("fail");
    notify({message: 'Lỗi lấy thông tin dữ liệu. Vui lòng liên hệ admin.'}, 'error');
    return;
  }
  if (data.response.status === 401) {
    localStorage.removeItem("token");
    window.location.assign("/");
  }
}