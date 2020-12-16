import {
  AfterViewInit,
  Component,
  Directive,
  Injectable,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export const consoleResult: BehaviorSubject<any> = new BehaviorSubject({});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-architecture-patterns';
  consoleResult = consoleResult;
}

declare const ngDevMode: boolean;
declare global {
  interface Window {
    __overrideDevMode: boolean;
  }
}
window.__overrideDevMode = false;

import getPrototypeOf = Reflect.getPrototypeOf;
export const getName = (x: any) =>
  typeof x === 'object' ? `[${getPrototypeOf(x).constructor.name}]` : `[${x}]`;
/**
 * Class of static methods to allow for consistent console logging.
 * @export Logger
 */
@Injectable({
  providedIn: 'any',
})
export class Logger {
  public static observer = {
    next: (x) => console.log('Observer got a next value: ', x),
    error: (err) => console.error('Observer got an error: ', err),
    complete: () => console.log('Observer got a complete notification'),
  };

  static get overrideDevMode() {
    return window.__overrideDevMode;
  }

  static set overrideDevMode(b: boolean) {
    window.__overrideDevMode = b;
  }

  /**
   * Loggt eine Konsolennachricht vom Typ 'warn'
   * @param module Verweis auf die Komponente mit "this"
   * @param methode Name der Methode
   * @param message eine oder mehrere Objekte
   */
  public static warn(module: any, methode?: any, ...message: any) {
    if (this.checkMode()) {
      console.warn(getName(module), methode, ...message);
      consoleResult.next([getName(module), methode, ...message]);
    }
  }

  /**
   * Loggt eine Konsolennachricht vom Typ 'debug'
   * @param module Verweis auf die Komponente mit "this"
   * @param methode Name der Methode
   * @param message eine oder mehrere Objekte
   */
  public static debug(module: any, methode?: any, ...message: any) {
    if (this.checkMode()) {
      console.debug(getName(module), methode, ...message);
      consoleResult.next([getName(module), methode, ...message]);
    }
  }

  /**
   * Loggt eine Konsolennachricht vom Typ 'info'
   * @param module Verweis auf die Komponente mit "this"
   * @param methode Name der Methode
   * @param message eine oder mehrere Objekte
   */
  public static info(module: any, methode: any, ...message: any) {
    if (this.checkMode()) console.info(getName(module), methode, ...message);
  }

  /**
   * Loggt eine Konsolennachricht vom Typ 'error'
   * @param module Verweis auf die Komponente mit "this"
   * @param methode Name der Methode
   * @param message eine oder mehrere Objekte
   */
  public static error(module: any, methode: any, ...message: any) {
    if (this.checkMode()) console.error(getName(module), methode, ...message);
  }

  /**
   * Prüft ob Anwendung im DevMode läuft
   */
  private static checkMode(): boolean {
    const isDev = typeof ngDevMode !== 'undefined' && !!ngDevMode;
    const noDev = typeof ngDevMode === 'boolean' && ngDevMode === false;
    return (noDev && Logger.overrideDevMode) || isDev;
  }
}

@Injectable({
  providedIn: 'any',
})
@Directive({ selector: '[log]' })
export class LoggerDirective
  extends Logger
  implements OnInit, OnDestroy, AfterViewInit {
  ngOnDestroy(): void {
    LoggerDirective.warn(this, 'LoggerDirective:ngOnDestroy', this);
  }
  ngAfterViewInit(): void {
    LoggerDirective.warn(this, 'LoggerDirective:ngAfterViewInit', this);
  }
  ngOnInit(): void {
    LoggerDirective.warn(getName(this), 'LoggerDirective:ngOnInit', this);
  }
}
