import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post: any = {}
  postId: string = "";

  constructor(public activatedRoute: ActivatedRoute, public ngZone: NgZone) {

    let postId = this.activatedRoute.snapshot.paramMap.get("postId");

    this.postId = postId;
    console.log(this.postId)

    firebase.firestore().collection("posts").doc( postId).get().then((docSnapShot) => {

      this.ngZone.run(()=>{
        this.post = docSnapShot.data();
        // console.log(this.post);
      })
    })
  }

  ngOnInit(): void {
  }

}
