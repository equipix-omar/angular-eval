import { SectorService } from './../../../Services/sector.service';
import { StatusService } from './../../../Services/status.service';
import { HttpClient } from '@angular/common/http';
import { Helper } from './../../../helper';
import { Component, ElementRef, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPermissionsService } from 'ngx-permissions';
import SwiperCore from 'swiper';
import { Virtual } from 'swiper';
import { AuthService } from 'src/app/Services/auth.service';
import { ManagementService } from 'src/app/Services/management.service';
import { DatePipe } from '@angular/common';
SwiperCore.use([Virtual]);
@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselsComponent {
  helper: any = Helper;
  item: any = {};
  item2: any = {};
  item3: any = {};
  item4: any = {};
  item5: any = {};
  Allstatus:any;
  Allsector:any;
  Allmember:any;
  Allemployee:any;
  Allmanagement:any;
  description:any="";
  name:any;
  user_id1:any[]=[];
  user_id2:any[]=[];
  user_id3:any[]=[];
  status_id:any;
  sector_id:any;
  member_id:any;
  employee_id:any;
  managements:any;
  management_ids:[]=[];
  p_id:any;
  start_date:any;
  deadline:any;
  project_created:any;
  formattedDate: any;
  date_finished:any;
  progress:any;
  progress_from_tasks:any;
  project_cost:any;
  project_rate_per_hour:any;
  estimated_hours:any;
  active:any;
  rating = 3;
  remember_token:any;
  currentPosition: any;
  sw:boolean=true;
  sw2:boolean=false;
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild('swiper', { static: false }) swiper: any;
  constructor(
    private http:HttpClient , private router:Router , private ProjectServise:ProjectService,
    private toastr: ToastrService , private _StatusService: StatusService,
    private permissionsService: NgxPermissionsService,private _sector: SectorService,
    private ngZone: NgZone,private auth:AuthService,private mng:ManagementService,
    private _AuthService:AuthService
    )
    {
      this.remember_token = localStorage.getItem('TOKEN');
      this.project_created =    this.project_created = new Date();
      this.formattedDate = this.formatDate(this.project_created);
      // this.formattedDate = this.formatDate(this.deadline);
      // console.log(this.formattedDate);

    }
    formatDate(date: Date): string {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    }
       FormData()
       {
        this.item4.role_id = 4;
        this._AuthService.AddMember(this.item4).subscribe(response=>{
          this.getmember()
        })
       }
       FormData2()
       {
        this.item4.role_id = 5;
        this._AuthService.AddEmployee(this.item5).subscribe(response=>{
          this.getemployee()
        })
       }
      ngOnInit(): void {
          this.getstatus();
          this.getsector();
          this.getemployee();
          this.getmanagement();
          this.getmember();
      }
      slideNext()
    {
      this.sw =false;
      setTimeout(() => {
        this.sw2 =true;
      }, 100);
        if(this.item.deadline)
        {
        //  this.item.deadline        = JSON.stringify(this.item.deadline).split('T').splice(0, 1).join('').replace('"', '');
        //  console.log(this.item.deadline);
         this.item.deadline = this.formatDate(this.item.deadline);
        }
        if(this.item.start_date)
        {
         this.item.start_date  = this.formatDate(this.item.start_date);
        }
        if(this.item.project_created)
        {
        this.item.project_created = this.formatDate(this.item.project_created);
        }
        // if(this.item.date_finished)
        // {
        //  this.item.date_finished = this.formatDate( new Date());
        // }
        this.item.date_finished = this.formatDate( new Date());

        this.item.remember_token  = this.remember_token;
        this.ProjectServise.addNewProject(Helper.toFormData(this.item)).subscribe((res)=>
          {
            if (res.message == "NEW PROJECT Created Successfully") {
              // this.router.navigate(['/Project']);
              // this.toastr.success("Project Created Successfully.")
              this.p_id = res.data.id;
              console.log(this.p_id);
            }
            else{
              this.toastr.error("Please Enter All Feild.")
            }
          })
      }
      slidePrev()
      {
          // this.swiper.swiperRef.slidePrev(10);
          this.sw =true;
          setTimeout(() => {
            this.sw2 =false;
          }, 100);
          //this.sw =true;
      }
      submit(): void{
        this.item2.project_id  = this.p_id;
        for (let index = 0; index < this.member_id.length; index++) {
          this.user_id3.push(this.member_id[index])
        }
        for (let index = 0; index < this.employee_id.length; index++) {
          this.user_id3.push(this.employee_id[index])
        }
        this.item2.user_id= this.user_id3;
        this.item3.project_id  = this.p_id;
        this.ProjectServise.storePivotData2(this.item2).subscribe((res)=>
        {
        })
        this.ProjectServise.storePivotData3(this.item3).subscribe((res)=>
        {
        })
        this.router.navigate(['/Project']);
        this.toastr.success("Project Created Successfully.")
      }
      getstatus()
     {
      this._StatusService.getAllStatus().subscribe((res:any) =>
      {
       this.Allstatus = res.data
      })
      }
      getsector()
      {
        this._sector.Allsector().subscribe((res:any) =>
         {
          this.Allsector = res.data
         })
      }
      getmember()
      {
        this.auth.getAllMembers().subscribe((res:any) =>
         {
          this.Allmember = res.data
         })
      }
      getemployee()
      {
        this.auth.getAllEmployees().subscribe((res:any) =>
         {
          this.Allemployee = res.data
         })
      }
      getmanagement()
      {
        this.mng.Allmanagement().subscribe((res:any) =>
         {
          this.Allmanagement = res.data
         })
      }

}
