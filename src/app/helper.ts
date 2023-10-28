export class Helper {
  public static setFile(event: { target: { files: any[]; }; }, key: string | number, model: { [x: string]: any; }) {
    model[key] = event.target.files[0];
  }
  public static toFormData(resource: { [x: string]: string | Blob; }) {
    let data = new FormData();
    for(let key of Object.keys(resource)) {
      if(resource[key])
        data.append(key, resource[key]);
    }
    return data;
  }
  public static loadImage(event: { target: { files: any[]; }; }, key: string, model: { [x: string]: any; })
   {
    Helper.setFile(event, key, model);
    var reader = new FileReader();
    reader.readAsDataURL(model[key]);
    reader.onload = (_event) => {
      model[key+"_url"] = reader.result;
    }
  }
}

