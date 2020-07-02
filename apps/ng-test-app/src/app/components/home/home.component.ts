import { Component, OnInit } from '@angular/core';
declare const TinCan: any;

@Component({
  selector: 'nx-ng-nest-universal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private lrs;

  constructor() { }

  ngOnInit(): void {
    // this.lrs = new TinCan.LRS({
    //   endpoint: "http://ec2-18-132-67-205.eu-west-2.compute.amazonaws.com/data/xAPI",
    //   username: "87a7d6c62bca52e799858707b7d1d1fd2671cbfb",
    //   password: "eb4d4be0f529e11383576392dbb8022f54d28983"
    // });
  }

  // public sendStatement() {
  //   let statement = new TinCan.Statement(
  //     {
  //         actor: {
  //             mbox: "jamie.king@goodthingsfoundation.org",
  //             name: "Jamie King"
  //         },
  //         verb: {
  //             id: "http://adlnet.gov/expapi/verbs/completed",
  //             name: {
  //               "en-gb": "completed"
  //           }
  //         },
  //         target: {
  //             id: "http://rusticisoftware.github.com/TinCanJS"
  //         }
  //     }
  //   );
  //   this.lrs.saveStatement(
  //     statement,
  //     {
  //     callback: function (err, xhr) {
  //         if (err !== null) {
  //             if (xhr !== null) {
  //                 console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
  //                 // TODO: do something with error, didn't save statement
  //                 return;
  //             }

  //             console.log("Failed to save statement: " + err);
  //             // TODO: do something with error, didn't save statement
  //             return;
  //         }

  //         console.log("Statement saved");
  //         // TOOO: do something with success (possibly ignore)
  //     }
  //   }
  //   );
  // }

}
