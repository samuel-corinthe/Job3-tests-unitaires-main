<?php
class Calculator {
public function calculate($expression) {
$expression = str_replace(['×', '÷', '-', '-', '—'], ['*', '/', '-', '-', '-'], $expression);
$expression = trim($expression);

try {
$result = eval("return $expression;");
} catch (Throwable $e) {
throw new RuntimeException("Erreur de calcul");
}

if ($result === false) {
throw new RuntimeException("Erreur de calcul");
}

return $result;
}
}
?>