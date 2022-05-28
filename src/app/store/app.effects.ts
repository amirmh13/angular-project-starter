import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


@Injectable()
export class AppEffects {

    constructor(
        private _action$: Actions,
    ) { }

    /**
    effectName$ = createEffect(() => {
        return this._action$.pipe(
            ofType(Action),
            exhaustMap(() => {
                return this._userService.getStudentScore().pipe(
                    map(score => {
                        return userActions.updateUserScore({ score })
                    })
                )
            })
        );
    })
     */
}