import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-proj',
  templateUrl: './show-proj.component.html',
  styleUrls: ['./show-proj.component.sass']
})
export class ShowProjComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

    listProjetos:any=[]; 

  ngOnInit(): void {
    this.refreshProjList();
  }

  refreshProjList(){
      this.service.listProjetos().subscribe(data=>{
      this.listProjetos=data;
      debugger;
    });
  }

  onDelete(id:any) {
    var answer = window.confirm("Certeza?");
      if (answer) {
        this.service.deleteProjeto(id).subscribe(data=> {
          alert('Projeto deletado com sucesso.')
          this.listProjetos  = this.listProjetos.filter((el:any)=> el.ProjectID != id)
        })
      }
  }

  onEdit(id:any) {
    this.router.navigate([`/projeto/${id}`]);
  }
}