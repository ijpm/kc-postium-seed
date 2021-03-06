import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Post } from './../post';
import { User } from './../user';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~ | Done                                                                                          |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~ | Done                                                                                        |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  @Output('userClick') selectUserRequest = new EventEmitter<User>();

  selectUser() : void {
    this.selectUserRequest.emit(this.post.author);
  }

  @Output('postClick') selectPostRequest = new EventEmitter<Post>();

  selectPost() : void {
    this.selectPostRequest.emit(this.post);
  }
  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
