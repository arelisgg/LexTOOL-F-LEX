import { Test } from '@nestjs/testing';
import { EntryModule } from './entry.module';

describe('EntryModule', () => {
    let entryModule: EntryModule;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        entryModule = moduleRef.get<EntryModule>(EntryModule);
    });

    it('should be defined', () => {
        expect(entryModule).toBeDefined();
    });
});
