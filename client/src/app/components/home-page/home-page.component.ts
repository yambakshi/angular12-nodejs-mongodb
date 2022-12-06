import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Data } from '@models/data';
import { ApiService } from '@services/api.service';


@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [
        './home-page.component.common.scss',
        './home-page.component.desktop.scss',
        './home-page.component.mobile.scss'
    ],
    encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
    subscriptions: { data: Subscription } = { data: null };
    data: Data;

    constructor(
        private titleService: Title,
        private apiService: ApiService,
        private route: ActivatedRoute) {
        this.titleService.setTitle('Home');

        this.route.data.subscribe(data => {
            if (!data['resolverResponse']) {
                return;
            }
        });

        this.subscriptions.data = this.apiService.getDataObservable().subscribe((data: Data) => {
            this.data = data;
        });
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        Object.values(this.subscriptions).forEach(subscription => subscription.unsubscribe());
    }
}