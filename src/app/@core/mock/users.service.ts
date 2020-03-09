import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    zouhair: { name: 'Zouhair Loucif', picture: 'assets/images/nick.png' },
    anas: { name: 'Anas Mokhlis', picture: 'assets/images/eva.png' },
    mohammed: { name: 'Mohammed Bahti', picture: 'assets/images/jack.png' },
    abdessamad: { name: 'Abdessamad Imjad', picture: 'assets/images/lee.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.zouhair, type: this.types.mobile },
    { user: this.users.anas, type: this.types.home },
    { user: this.users.mohammed, type: this.types.mobile },
    { user: this.users.abdessamad, type: this.types.mobile },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.zouhair, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.anas, type: this.types.home, time: this.time.setHours(17, 45)},
    { user: this.users.mohammed, type: this.types.mobile, time: this.time.setHours(5, 29)},
    { user: this.users.abdessamad, type: this.types.mobile, time: this.time.setHours(11, 24)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
