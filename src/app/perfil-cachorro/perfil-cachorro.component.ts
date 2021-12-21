import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cachorro } from '../module/cachorro';
import { CachorrosService } from '../service/cachorros.service';

@Component({
  selector: 'app-perfil-cachorro',
  templateUrl: './perfil-cachorro.component.html',
  styleUrls: ['./perfil-cachorro.component.css']
})
export class PerfilCachorroComponent implements OnInit {

  id: string | null;
  public cachorros: Cachorro;

  nome: string;
  descricao: string;
  imagem: string;

  myForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cachorrosService: CachorrosService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultar(this.id);

    this.myForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.maxLength(50)]]
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      console.log('Valid?', form.valid); // true or false
      alert("Seu Email foi enviado com sucesso");
      this.myForm = this.fb.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mensagem: ['', [Validators.maxLength(50)]]
      });
    } else {
      alert("Nome ou email não estão corretos");
    }
    
  }

  consultar(id: any) {
    this.cachorrosService.obterCachorro(id)
      .subscribe(
        cachorro => {
          this.cachorros = cachorro;
          this.nome = this.cachorros.nome;
          this.descricao = this.cachorros.descricao;
          this.imagem = this.cachorros.imagem;
        },
        (error) => console.log(error)
      );
  }

}
