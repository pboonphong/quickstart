import { Component } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: post[];

  constructor(private postService: PostService) {
    this.name = 'Putthiphong Boonphong';
    this.email = 'putthiphong.boonphong@gmail.com';
    this.address = {
      street: 'EmQuartier Sukhumvit Rd.',
      district: 'Wattana',
      province: 'Bangkok'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = true;

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }
}

interface address {
  street: string;
  district: string;
  province: string;
}

interface post {
  id: number;
  title: string;
  body: string;
}
