import {Injectable} from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class SystemPermissionsHelperService {
   
	constructor() {
	}
	public checkPermissions(permissions){

		let stored_permissions = JSON.parse(localStorage.getItem('permissions'));

		let has_permission = true;

		// TODO :: TEMP DISABLE
		permissions.forEach((permission)=>{
			if(stored_permissions)
			{
				let check = stored_permissions.includes(permission);
				if (!check) {
					has_permission = false;
				}
			}
			
		});
		
		if (!permissions.length){
			has_permission = false;
		}

		return has_permission;
	}
	public  checkPermission(permission) {

		let stored_permissions = JSON.parse(localStorage.getItem('permissions'));

		let has_permission = true;

		// TODO :: TEMP DISABLE
			if(stored_permissions)
			{
				let check = stored_permissions.includes(permission);
				if (!check) {
					has_permission = false;
				}
			}
			



		return has_permission;
	}

}
