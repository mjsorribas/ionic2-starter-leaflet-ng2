import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { YagaApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { LayertreePage } from '../pages/layertree/layertree';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LayertreeService } from './layertree.service';

@NgModule({
    declarations: [
        YagaApp,
        MapPage,
        LayertreePage,
    ],
    imports: [
        BrowserModule,
        YagaModule,
        HttpModule,
        IonicModule.forRoot(YagaApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        YagaApp,
        MapPage,
        LayertreePage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        LayertreeService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}