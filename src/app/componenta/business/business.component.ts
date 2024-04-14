
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Business } from 'moudels/Business';
import { Component } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
  BusinessService: any;


constructor(public router:Router){
const ob=new Observable(subcriber=>{
      let count=0;
      setInterval(()=>{
        subcriber.next(count++);
      },1000)
      // subcriber.next(50);
    })
 ob.subscribe(data=>{
      console.log(data)
    })
}
business: Business[] = [new Business("123 ","Ready","pt",false,"java",45,63,9),new Business("234","Microsoft ","tel-aviv",true,"sql",4500,60033,94),
new Business("345 ","Google ","bney brak",true,"html",4500,60033,94),new Business("456","Apple","tel-aviv",true,"C#",4500,60033,94)];
  isShowBusiness: boolean = true; 
  BusinessId=0;
  ind: number = -1;
  selectedBusiness: Business = new Business();
  isEdit: boolean = false;
  changeShowBusiness() {
 
    this.isShowBusiness = !this.isShowBusiness;
  }

  edit(Business2: Business, ind: number) {
    this.isEdit = true;
    let tempBusiness = new Business(Business2.BusinessName, Business2.BusinessId, Business2.BusinessCity, Business2.ProfessionType,Business2.LanguageId,Business2.NumWeekHours,Business2.SeniorityBusiness,Business2.SalaryHour);
    this.selectedBusiness = tempBusiness;
    this.ind = this.business.indexOf(Business2);
  }
  save() {
    this.business[this.ind] = this.selectedBusiness;
    this.isEdit = false;
  }
  removeBusiness(Business: Business) {
    let ind = this.business.indexOf(Business);
    this.business.splice(ind, 1);
  }
sum=10;
  a(){return new Promise((resolve,reject)=>{
      let count=0;
      setInterval(()=>{
      resolve(count++);
      },1000)
    })
  }

  b(){
    console.log(this.sum=this.sum+10);
  }
getBusinessById() {
    this.BusinessService.getBusinesseById(this.BusinessId).subscribe((state: Business) => 
      this.selectedBusiness = state
    );
  }
  getBusiness() {
    this.BusinessService.getBusiness().subscribe((business: number) => {
      // console.log(business);
      this.BusinessId=business;
    });
  }
  route(){
    this.router.navigate(["/"]);
  }
  getB(){
    this.BusinessService.getBusiness()
    }




    addBusiness() {
      var user = {
        firstName: this.business,
        lastName: this.BusinessId,
        // bank: this.,
        // dateOfJoining: this.dateOfJoining,
        // email: this.email,
        // tz: this.tz,
        // categoryId: this.categoryId
      }
      this.BusinessService.addBusiness(user).subscribe(() => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
  
        var showUpdateSuccess = document.getElementById('update-success-alert');
        if (showUpdateSuccess) {
          showUpdateSuccess.innerText = 'User Created Succesfully'
          showUpdateSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showUpdateSuccess) {
            showUpdateSuccess.style.display = "none"
          }
        }, 4000);
      })
   
    }

  





  updateBusiness() {
    var user = {
      userId: this.business,
      // firstName: this.firstName,
      // lastName: this.lastName,
      // bank: this.bank,
      // dateOfJoining: this.dateOfJoining,
      // email: this.email,
      // tz: this.tz,
      // categoryId: this.categoryId
    }
    var userId=this.business;
    this.BusinessService.updateUser(userId,user).subscribe(() => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.innerText = 'User Updated Succesfully'
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }
  }
 

  




