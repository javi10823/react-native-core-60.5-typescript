import { RegisteredFieldState, FieldState } from 'redux-form';

declare module 'redux-form' {
  export interface FormStateTyped<V> {
    registeredFields: RegisteredFieldState[];
    fields?: { [name: string]: FieldState };
    values: { [K in keyof V]: V[K] };
    active?: string;
    anyTouched?: boolean;
    submitting?: boolean;
    submitErrors?: { [fieldName: string]: string };
    submitFailed?: boolean;
  }
}
