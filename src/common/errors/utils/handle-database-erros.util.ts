import { UniqueConstraintError } from './../types/UniqueConstraintError';
import { PrismaClientError } from './../types/PrismaClienteErrors';
import { DatabaseError } from '../types/DatabaseErros';
enum PrismaErros {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErros.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};
