import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-proj',
  templateUrl: './add-edit-proj.component.html',
  styleUrls: ['./add-edit-proj.component.sass']
})
export class AddEditProjComponent implements OnInit {
  id=''

  projeto = new FormGroup({
  name: new FormControl(''),
  startdate: new FormControl(''),
  enddate: new FormControl(''),
  value: new FormControl(''),
  risk: new FormControl(''),
  participants: new FormControl(''),
  }, Validators.required)

  constructor(private route: ActivatedRoute, private sharedService:SharedService) { }

  onSubmit(){
    const model = {
      ProjectName: this.projeto.value.name,
      ProjectBeginning: this.projeto.value.startdate,
      ProjectEnd: this.projeto.value.enddate,
      Value: this.projeto.value.value,
      Risk: this.projeto.value.risk,
      Participants: this.projeto.value.participants,
    }

    if (this.id==''){ 
      this.sharedService.addProjeto(model).subscribe((response) => {
        console.log(response)
        alert('Cadastrado com sucesso')
      })
    }
    else{
      this.sharedService.updateProjeto(this.id, model).subscribe((response) => {
        console.log(response)
        alert('Atualizado com sucesso.')
      })
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id']
        this.sharedService.getProjeto(params['id']).subscribe(response=>{
          const projeto = response.filter((el:any)=>el.ProjectID == params['id'])[0]
          this.projeto.setValue({ name: projeto.ProjectName, 
                                  startdate: projeto.ProjectBeginning,
                                  enddate: projeto.ProjectEnd,
                                  value: projeto.Value,
                                  risk: projeto.Risk,
                                  participants: projeto.Participants});
        })
      }
    })
  }
}
