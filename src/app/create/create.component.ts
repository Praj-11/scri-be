import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor/lib/config';
import 'firebase/firestore'
import 'firebase/auth'
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  title: String;
  content: String;
  editorConfig: AngularEditorConfig;
  @Output('postCreated') postCreated = new EventEmitter();


  constructor() {
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '150px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: false,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [
        ['bold', 'italic'],
        ['fontSize']
      ]
    };
  }

  ngOnInit(): void {
  }

  createPost() {

    firebase.firestore().collection("posts").add({
      title: this.title,
      content: this.content,
      owner: firebase.auth().currentUser.uid,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => {
      console.log(data);
      this.postCreated.emit();
    }).catch((error)=>{
      console.log(error);
    })
  }

}


