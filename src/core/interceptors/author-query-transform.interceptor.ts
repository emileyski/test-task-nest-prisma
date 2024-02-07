import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertStringToArrayOrLeaveIntact } from '../utils';
import { AuthorFilters } from '../interfaces';
import { AuthorSorts } from '../interfaces/author-sorts.interface';

@Injectable()
export class AuthorQueryTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const {
      name,
      surname,
      email,
      phoneNumber,
      sortName,
      sortSurname,
      sortEmail,
      sortPhoneNumber,
    } = request.query;

    // Transforming query parameters
    request.query = {
      ...request.query,
      authorFilters: {
        name: convertStringToArrayOrLeaveIntact(name),
        surname: convertStringToArrayOrLeaveIntact(surname),
        email: convertStringToArrayOrLeaveIntact(email),
        phoneNumber: convertStringToArrayOrLeaveIntact(phoneNumber),
      } as AuthorFilters,
      authorSorts: {
        name: sortName,
        surname: sortSurname,
        email: sortEmail,
        phoneNumber: sortPhoneNumber,
      } as AuthorSorts,
    };

    return next.handle().pipe(
      map((data) => {
        // You can modify response here if needed
        return data;
      }),
    );
  }
}
