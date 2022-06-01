import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastify from 'fastify';

const instance = fastify().withTypeProvider<TypeBoxTypeProvider>();

instance.register(async (instance2: typeof instance) => {});
