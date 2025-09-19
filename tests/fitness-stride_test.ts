import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.4.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
    name: "Fitness Stride: Validate Challenge Creation and Participation",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const admin = accounts.get('wallet_1')!;
        const participant1 = accounts.get('wallet_2')!;
        const participant2 = accounts.get('wallet_3')!;

        // Test challenge creation
        let block = chain.mineBlock([
            Tx.contractCall('fitness-stride', 'register-for-challenge', [types.uint(1)], admin.address)
        ]);

        // Add your test cases here to validate contract functionality
        // Example assertions:
        block.receipts[0].result.expectErr();
    }
});

Clarinet.test({
    name: "Fitness Stride: Reward Pool Contribution",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const admin = accounts.get('wallet_1')!;
        const participant = accounts.get('wallet_2')!;

        // Add reward pool contribution test
        let block = chain.mineBlock([
            Tx.contractCall('fitness-stride', 'add-to-reward-pool', 
                [types.uint(1), types.uint(1000)], 
                participant.address)
        ]);

        // Example verification
        block.receipts[0].result.expectErr();
    }
});