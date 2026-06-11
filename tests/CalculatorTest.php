<?php
require_once __DIR__ . '/../scr/Calculator.php';

use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase
{
    private Calculator $calculator;

    protected function setUp(): void
    {
        $this->calculator = new Calculator();
    }

    public function testAddition(): void
    {
        $result = $this->calculator->calculate('15+5');
        $this->assertEquals(20, $result);
    }

    public function testSoustraction(): void
    {
        $result = $this->calculator->calculate('11-5');
        $this->assertEquals(6, $result);
    }

    public function testMultiplication(): void
    {
        $result = $this->calculator->calculate('5*5');
        $this->assertEquals(25, $result);
    }

    public function testDivision(): void
    {
        $result = $this->calculator->calculate('18/2');
        $this->assertEquals(9, $result);
    }

    public function testDivisionParZero(): void
    {
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('Erreur de calcul');
        $this->calculator->calculate('10/0');
    }
}
