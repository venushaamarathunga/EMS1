import { Time } from '@angular/common';

export interface CricketMatch{
    id: string;
    mainTopic: string;
    subTopic: string;
    date: Date;
    time: Time;
    place: string;
    rLastday: Date;
    content1: string;
    content2: string;
}